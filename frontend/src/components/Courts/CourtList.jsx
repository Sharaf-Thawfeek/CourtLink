import { courts } from './../../assets/data/court'; // Ensure correct path
import CourtCard from './CourtCard';

const CourtList = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
      {courts.length > 0 ? (
        courts.map((court) => (
          <CourtCard key={court.id} court={court} />
        ))
      ) : (
        <p className="col-span-3 text-center text-gray-500">No courts available.</p>
      )}
    </div>
  );
};

export default CourtList;
