// @ts-nocheck
import leatherShoes from "@model/vans_shoes.glb?url";
import iosLeatherShoes from "@model/vans_shoes.usdz?url";
const ModelViewer = () => {
  return (
    <>
      <script
        type="module"
        src="https://ajax.googleapis.com/ajax/libs/model-viewer/3.5.0/model-viewer.min.js"
      ></script>
      <div>
        {/* @ts-ignore*/}
        <model-viewer
          class="h-[300px] w-[300px] sm:h-[600px] sm:w-[600px] md:h-[500px] md:w-[500px] lg:h-[800px] lg:w-[800px]"
          alt="3D Model"
          src={leatherShoes}
          ios-src={iosLeatherShoes}
          ar
          scale="2 2 2"
          tone-mapping="neutral"
          shadow-intensity="1"
          camera-controls
          touch-action="pan-y"
        >
          {/*@ts-ignore */}
        </model-viewer>
      </div>
    </>
  );
};

export default ModelViewer;
