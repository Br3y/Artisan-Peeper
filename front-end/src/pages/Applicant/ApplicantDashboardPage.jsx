import JobListing from "@/components/JobListing.jsx";
import Container from "@/components/Container.jsx";
import Searchbar from "@/components/Searchbar";

function ApplicantDashboardPage() {

  return (
    <Container>
      <Searchbar placeholderVal={"Search a Job"}/>
      <JobListing/>
    </Container>
  )
}

export default ApplicantDashboardPage
