import ImageWithTextOverlay from "../components/ImageWithTextOverlay";
import ProductsGrid from "../components/ProductsGrid";
import ImageWithTextOverlay2 from "../components/ImageWithTextOverlay2";
import CreativeSolutionsSection from "../components/CreativeSolutionsSection";
import ProjectsSection from "../components/ProjectsSection";
import TilesCollection from "../components/TilesCollection";
import ShowRoomSection from "../components/ShowRoomSection";

export default function App() {
  return (
    <div>
      <ImageWithTextOverlay />
      <ProductsGrid />
      <ImageWithTextOverlay2 />
      <CreativeSolutionsSection />
      <ProjectsSection />
      <TilesCollection />
      <ShowRoomSection />
    </div>
  );
}
