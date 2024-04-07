
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import SoftSkillsRadialChart from "./charts/SoftSkillsRadialChart"
import BigFiveRadialChart from "./charts/BigFiveRadialChart"
import ResumeDonutChart from "./charts/ResumeDonutChart"
import HiringMeterDonutChart from "./charts/HiringMeterDonutChart"

const AboutCard = ({image, name, job, email, contact, type}) => {
  return (
      <>
        <div className="flex flex-col gap-2">
          <Card>
            <CardHeader className="flex items-center justify-center md:justify-start sm:flex-col md:flex-row gap-8">
              <div className="grid justify-center items-center">
                <img className='h-24 w-24 rounded-full' src='https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
              </div>
              <div className="flex flex-col justify-center items-center md:items-start">
                <CardTitle>{name}</CardTitle>
                <CardDescription className="text-muted-bg my-1">{job}</CardDescription>
                <CardDescription>{type}</CardDescription>
              </div>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>
                Contact
              </CardTitle>
              <p className="text-sm text-gray-200"><span className="text-gray-500 text-l">Email:</span> {email}</p>
              <p className="text-sm text-gray-200"><span className="text-gray-500 text-l">Phone:</span> {contact}</p>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-center">
                Statistics
              </CardTitle>
              <CardDescription className="flex flex-col justify-center items-center gap-8">
                <CardContent>
                  <CardTitle className="text-center text-md mt-6 mb-2">
                    Talent Hiring Meter
                  </CardTitle>
                  <HiringMeterDonutChart/>
                </CardContent>
                <CardContent>
                  <CardTitle className="text-center text-md mt-6 mb-2">
                    Resume Evaluation Score
                  </CardTitle>
                  <ResumeDonutChart/>
                </CardContent>
                <CardContent>
                  <CardTitle className="text-center text-md mt-6 mb-2">
                    Soft Skill Assessment Score
                  </CardTitle>
                  <SoftSkillsRadialChart/>
                </CardContent>
                <CardContent>
                  <CardTitle className="text-center text-md mt-6 mb-2">
                    Big-5-Theory Personality Insight
                  </CardTitle>
                  <BigFiveRadialChart/>
                </CardContent>
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
        <div className="grid justify-center items-center">
          <div className=' lg:w-[900px] p-5 dark:bg-slate-900 shadow-md rounded-xl border-[1px] my-5'
          >
          <div className='flex justify-center items-center pb-4 border-b-[1px] border-black dark:border-white'>
            <img className='h-28 rounded-full mr-4 border-2 bg-black dark:bg-indigo-500' src={image} alt='Profile'/>
            <div>
              <p className='text-wrap font-extrabold text-2xl'>{name}</p>
              <p className='tracking-wide'>Applying for {`${job}`}</p>
              <p className='tracking-wide font-extralight'>{type}</p>
            </div>
          </div>
          <h1 className='text-xl font-bold pt-3'>Contact:</h1>
          <ul>
            <li><b>Email:</b> {email}</li>
            <li><b>Contact:</b> {contact}</li>
          </ul>
          </div>
        </div>
      </>
  )
}

export default AboutCard