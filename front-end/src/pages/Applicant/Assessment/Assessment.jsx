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
} from "@/components/ui/card";
import { Link } from "react-router-dom";

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
        toast.error(
          "Alert: 1 more consecutive switching of tabs will refrain you taking the quiz"
        );
      } else if (tabSwitchCount === 3) {
        toast.error(
          "Alert: Last one switch you will refrained from taking the quiz"
        );
      } else if (tabSwitchCount >= 4) {
        setTerminated(true);
      } else {
        toast.error(
          "Alert: 2 more consecutive switching of tabs will refrain you taking the quiz"
        );
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

    window.addEventListener("blur", checkTabSwitch);

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
                <CardTitle className="text-3xl">
                  After consecutive attempts of accessing resource via third
                  party.
                  <br />
                  We regret to inform you that you have been terminated to take
                  the assessment.
                </CardTitle>
                <CardDescription className="text-sm">
                  We understand this may be concerning, and we encourage you to
                  reach out to your employer directly for any further inquiries
                  or assistance regarding the assessment process. <br /> Your
                  employer will be able to provide guidance and support to
                  ensure any issues are addressed promptly. Thank you for your
                  understanding and cooperation."
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
                <Question
                  question={
                    "When faced with a challenging task in a team setting, what should you do?"
                  }
                  no={"1"}
                  answerA="Take charge and delegate responsibilities to team members."
                  answerB={
                    "Take charge and delegate responsibilities to team members."
                  }
                  answerC={
                    "Work independently to ensure the task is completed efficiently."
                  }
                  answerD={
                    "Criticize team members who are not performing up to expectations."
                  }
                />
                <Question
                  question={
                    "During a team meeting, one member continuously interrupts others and dominates the conversation. What is the most effective way to handle this situation?"
                  }
                  no={"2"}
                  answerA="Take charge and delegate responsibilities to team members."
                  answerB={
                    "Politely interrupt the member and redirect the conversation to another topic."
                  }
                  answerC={
                    "Assign a facilitator for the meeting to manage the discussion and ensure everyone has a chance to speak."
                  }
                  answerD={
                    "Criticize team members who are not performing up to expectations."
                  }
                />
                <Question
                  question={
                    "What is the best approach to resolving conflicts within a team?"
                  }
                  no={"3"}
                  answerA="Avoid addressing conflicts and hope they resolve themselves over time."
                  answerB={
                    "Confront the individuals involved and demand they resolve their differences immediately."
                  }
                  answerC={
                    "Encourage open communication, active listening, and collaboration to find a mutually acceptable solution."
                  }
                  answerD={
                    "Assign blame and punishment to the individuals involved in the conflict."
                  }
                />
                <Question
                  question={
                    "In a team project, one member consistently fails to meet deadlines and deliverables. What action should be taken?"
                  }
                  no={"4"}
                  answerA="Ignore the issue as long as the rest of the team is performing adequately."
                  answerB={
                    "Assign additional tasks to compensate for the underperforming member."
                  }
                  answerC={
                    "Have a private discussion with the member to understand the reasons for their performance issues and offer support."
                  }
                  answerD={
                    "Publicly criticize the member to motivate them to improve."
                  }
                />
                <Question
                  question={
                    "How can you ensure effective communication within a diverse team?"
                  }
                  no={"5"}
                  answerA="Use complex technical jargon to demonstrate expertise and authority."
                  answerB={
                    "Assume everyone shares the same cultural norms and communication style."
                  }
                  answerC={
                    "Adapt your communication style to accommodate the preferences and needs of team members from different backgrounds."
                  }
                  answerD={
                    " Limit communication to written forms to avoid misunderstandings."
                  }
                />
                <Question
                  question={
                    "What should be the primary focus of a team leader during a brainstorming session?"
                  }
                  no={"6"}
                  answerA="Dictate ideas and solutions to team members."
                  answerB={
                    "Critique and evaluate every suggestion immediately."
                  }
                  answerC={
                    "Encourage creativity and innovation by welcoming all ideas without judgment."
                  }
                  answerD={
                    "Dominate the discussion with their own ideas and opinions."
                  }
                />
                <Question
                  question={
                    "In a team where conflict arises frequently, what could be a potential underlying issue?"
                  }
                  no={"7"}
                  answerA="Lack of diversity within the team."
                  answerB={"Poor communication and trust among team members."}
                  answerC={"Excessive workload and stress."}
                  answerD={
                    "Overemphasis on individual performance rather than collective success."
                  }
                />
                <Question
                  question={
                    "What is the role of constructive feedback in team performance?"
                  }
                  no={"8"}
                  answerA="To highlight individual failures and shortcomings."
                  answerB={
                    "To build trust and improve performance by providing guidance and support."
                  }
                  answerC={
                    "To discourage team members from taking risks and experimenting with new ideas."
                  }
                  answerD={"To assign blame and punishment for mistakes."}
                />
                <Question
                  question={
                    "How can team members foster a culture of accountability?"
                  }
                  no={"9"}
                  answerA="Avoid taking responsibility for mistakes and failures."
                  answerB={
                    "Blame external factors for shortcomings instead of acknowledging personal contributions."
                  }
                  answerC={
                    " Hold themselves and each other accountable for meeting goals and commitments."
                  }
                  answerD={
                    "Delegate responsibility for tasks and outcomes to team leaders."
                  }
                />
                <Question
                  question={
                    "What is the most effective way to resolve conflicts that arise due to differing opinions within a team?"
                  }
                  no={"10"}
                  answerA="Suppress differing opinions to maintain harmony within the team."
                  answerB={
                    "Compromise and find common ground that satisfies all parties involved."
                  }
                  answerC={
                    "Assign blame and punishment to the individuals holding differing opinions."
                  }
                  answerD={
                    "Ignore the conflicts and hope they dissipate over time."
                  }
                />
                <Link to="/assessment-areas">
                  <Button className="w-[100%]">Submit</Button>
                </Link>
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
