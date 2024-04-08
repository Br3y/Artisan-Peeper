import JobListing from "@/components/JobListing.jsx";
import Container from "@/components/Container.jsx";
import Total from "@/components/Total";
import TablePassing from "@/components/TablePassing.jsx";
import Top from "@/components/Top.jsx";
import Searchbar from "@/components/Searchbar";

function AdminDashboard() {
  return (
    <Container>
      <Searchbar placeholderVal={"Search Applicant"}/>
      <div className="flex justify-center items-center flex-col">
        <div className="flex flex-wrap justify-center items-center gap-6 my-3">
          <Total title="Total Applications" total="1" added="+" />
          <Total title="Successful Evaluation" total="1" added="+" />
          <Total title="Passed Assessment" total="1" added="+" />
          <Total title="Talents Onboard" total="23" added="+" />
        </div>
        <div className="flex justify-center gap-7 flex-wrap my-7 py-5">
          <div className="p-5 border-2 rounded-lg shadow-md flex flex-col justify-center items-center">
            <p className="text-xl font-bold mb-5 text-center">
              Passed Curriculum Vitae&apos;s
            </p>
            <TablePassing />
          </div>
          <div className="p-5 border-2 rounded-lg shadow-md">
            <p className="text-xl trfont-bold mb-3">Top Candidates</p>
            <Top />
          </div>
        </div>
        <div className="flex justify-center items-center flex-col">
          <h1 className="block pl-5 font-bold text-4xl">
            Applicants View
          </h1>
          <JobListing />
        </div>
      </div>
    </Container>
  );
}

export default AdminDashboard;
