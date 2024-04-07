import React, { useEffect, useState, useRef } from "react";
import QuestionNav from "@/components/QuestionNav";
import Camera from "@/components/Camera.jsx";
import Question from "@/components/Question.jsx";
import { Button } from "@/components/ui/button";
import { Toaster, toast } from "react-hot-toast";
import Container from "@/components/Container.jsx";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const Assessment = () => {
  const [tabSwitchingEnabled, setTabSwitchingEnabled] = useState(true);
  const [terminated, setTerminated] = useState(false);
  const tabSwitchCountRef = useRef(0);

  useEffect(() => {
    let quizTimeout;

    function checkTabSwitch() {
      if (!tabSwitchingEnabled) return;
      tabSwitchCountRef.current++;

      const tabSwitchCount = tabSwitchCountRef.current;

      if (tabSwitchCount === 2) {
        toast.error("No switch tabbing that is dishonesty");
      } else if (tabSwitchCount === 3) {
        toast.error("One more and you will be terminated immediately");
      } else if (tabSwitchCount >= 4) {
        setTerminated(true);
      } else {
        toast.error("You switched tabs.");
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
      toast.error("You have been terminated from the quiz.");
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
                <QuestionNav />
              </div>
            </div>
            <div className="flex flex-col gap-10 pt-5 overflow-hidden">
              <span className="pb-2 text-2xl text-wrap border-b-[1px] w-full">
                Teamwork
              </span>
              <div className="h-[calc(70vh+100px)] overflow-scroll grid gap-4">
                <Question />
                <Question />
                <Question />
                <Question />
                <Question />
                <Question />
                <Question />
                <Question />
                <Button
                  className="mt-10 mb-10 w-[100%]"
                  onClick={toggleTabSwitching}
                >
                  {tabSwitchingEnabled
                    ? "Disable Tab Switching"
                    : "Enable Tab Switching"}
                </Button>
              </div>
            </div>
          </div>
        </Container>
      )}
    </>
  );
};

export default Assessment;
