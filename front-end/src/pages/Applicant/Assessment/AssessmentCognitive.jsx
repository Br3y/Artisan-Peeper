import React, { useEffect, useState, useRef } from "react";
import QuestionNav from "@/components/QuestionNav";
import Camera from "@/components/Camera.jsx";
import Question from "@/components/Question.jsx";
import { Button } from "@/components/ui/button";
import { Toaster, toast } from "react-hot-toast";
import Container from "@/components/Container.jsx";
import { Textarea } from "@/components/ui/textarea";
import CognitiveTimer from "@/components/CognitiveTimer";
import { Link } from "react-router-dom";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const AssessmentCognitive = () => {
  const [tabSwitchingEnabled, setTabSwitchingEnabled] = useState(false);
  const [terminated, setTerminated] = useState(false);
  const tabSwitchCountRef = useRef(0);

  useEffect(() => {
    let quizTimeout;

    function checkTabSwitch() {
      if (!tabSwitchingEnabled) return;
      tabSwitchCountRef.current++;

      const tabSwitchCount = tabSwitchCountRef.current;

      if (tabSwitchCount === 2) {
        toast.error("Alert: 1 more consecutive switching of tabs will refrain you taking the quiz");
      } else if (tabSwitchCount === 3) {
        toast.error("Alert: Last one switch you will refrained from taking the quiz");
      } else if (tabSwitchCount >= 4) {
        setTerminated(true);
      } else {
        toast.error("Alert: 2 more consecutive switching of tabs will refrain you taking the quiz");
      }

      quizTimeout = setTimeout(function () {
        setTerminated(true);
      }, 8000);
      document.getElementById("history").innerHTML = "";
      document.getElementById("history").classList.add("red");
      playTabSwitchAudio();
    }

    // NOT YET FUNCTIONAL -RAM
    function playTabSwitchAudio() {
      const audio = new Audio("/DOTA Trashtalk.mp3");
      audio.play();
    }
    // NOT YET FUNCTIONAL -RAM
    
    window.addEventListener('blur', checkTabSwitch);

    window.addEventListener("focus", function () {
      clearTimeout(quizTimeout);
      document.getElementById("history").classList.remove("red");
    });

    return () => {
      window.removeEventListener("blur", checkTabSwitch);
      clearTimeout(quizTimeout);
    };
  }, [tabSwitchingEnabled]);

  useEffect(() => {
    if (terminated) {
      toast.error("You have been terminated taking the quiz.");
    }
  }, [terminated]);

  const toggleTabSwitching = () => {
    setTabSwitchingEnabled((prevEnabled) => !prevEnabled);
  };

  return (
    <>
      <Toaster />
      {terminated ? (
        <Container>
          <div className="flex justify-center items-center text-center min-h-screen text-4xl px-2">
            <Card className="p-2">
              <CardHeader>
                <CardTitle className="text-3xl">After consecutive attempts of accessing resource via third party.<br/>We regret to inform you that you have been terminated to take the assessment.</CardTitle>
                <CardDescription className="text-sm">
                We understand this may be concerning, and we encourage you to reach out to your employer directly for any further inquiries or assistance regarding the assessment process. <br/> Your employer will be able to provide guidance and support to ensure any issues are addressed promptly. Thank you for your understanding and cooperation."
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </Container>
      ) : (
        <Container>
          <div className="grid gap-x-5 md:grid-cols-2 justify-center items-center min-h-screen pt-3">
            <div className="mx-auto w-[400px]">
              <div className="grid gap-4 justify-center items-center">
                <Camera />
                <CognitiveTimer/>
              </div>
            </div>
            <div className="flex flex-col gap-10 pt-5 overflow-hidden ">
              <span className="pb-2 text-2xl text-wrap border-b-[1px] w-full">
                Cognitive
              </span>
              <div className="h-[calc(70vh+100px)] overflow-scroll grid gap-4 p-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="m-5 text-justify">
                     Can you describe a situation where you had to navigate a conflict or disagreement within a team? How did you approach the situation, and what was the outcome?
                    </CardTitle>
                    <CardContent>
                      <Card>
                        <CardHeader>
                          <Textarea placeholder="Type in your answer here..."/>
                        </CardHeader>
                        <CardContent>
                        <Link to="/assessment-areas">
                          <Button className="w-[100%]">Submit</Button>
                        </Link>
                        </CardContent>
                      </Card>
                    </CardContent>
                  </CardHeader>
                </Card>
                
              </div>
            </div>
          </div>
        </Container>
      )}
    </>
  );
};

export default AssessmentCognitive;
