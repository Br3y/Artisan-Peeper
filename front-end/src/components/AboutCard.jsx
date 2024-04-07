
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import {Link} from 'react-router-dom'

import SoftSkillsRadialChart from "./charts/SoftSkillsRadialChart"
import BigFiveRadialChart from "./charts/BigFiveRadialChart"
import ResumeDonutChart from "./charts/ResumeDonutChart"
import HiringMeterDonutChart from "./charts/HiringMeterDonutChart"

const AboutCard = ({image, name, job, email, contact, type}) => {
  const subject = encodeURIComponent('Congratulations! Invitation to Final Stage of Hiring Process');
  const emailTemplate = encodeURIComponent(`
  Dear ${name},
  
  I hope this email finds you well.
  
  I am pleased to inform you that you have successfully passed the assessment stage of our hiring process for the ${job} position. Congratulations on this achievement!
  
  Your skills, experience, and achievements have impressed our hiring team, and we believe you would be a valuable addition to our company.
  
  We would like to invite you to the final stage of the hiring process, where we will discuss the details of your onboarding and provide you with the opportunity to review and sign the job offer.
  
  The final stage will include:
  
  1. Onboarding Process Overview: We will provide you with an overview of our company's onboarding process, including important information about our culture, policies, and procedures.
  
  2. Job Offer Discussion: We will discuss the details of the job offer, including compensation, benefits, and any additional terms or conditions.
  
  3. Signing of Job Offer: Once all details have been reviewed and agreed upon, we will present you with the job offer for your review and signature.
  
  Please let us know your availability for the final stage of the hiring process. We are flexible and will do our best to accommodate your schedule.
  
  If you have any questions or require any additional information before the final stage, please feel free to contact me at +63 0920 123 4567.
  
  Once again, congratulations on your success so far, and we look forward to meeting with you to discuss the next steps.
  
  Best regards,
  
  John Craig
  Human Resource
  +63 0920 123 4567
  John Doe
  `)

  const mailTemplate = `mailto:${email}?subject=${subject}&body=${emailTemplate}`

  return (
      <>
        <div className="flex flex-col gap-2 py-2">
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
              <p className="text-sm text-gray-200"><span className="text-gray-500 text-l">Email:</span><Link to={mailTemplate}> {email}</Link></p>
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
      </>
  )
}

export default AboutCard