import { people } from "./people";
import DynamicSwiper from "./DynamicSwiper";

const ClientExperienceSection = () => {
  return (
    <div className="p-3 grid place-content-center place-items-center">
      <DynamicSwiper people={people} />
    </div>
  );
};

export default ClientExperienceSection;
