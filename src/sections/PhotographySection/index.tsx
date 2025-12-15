import { PhotoGallery } from "@/sections/PhotographySection/components/PhotoGallery";

export const PhotographySection = () => {
  return (
    <div className="box-border caret-transparent mt-4">
      <div className="text-lg font-medium box-border caret-transparent blur-0 leading-7">
        Photography
      </div>
      <div className="box-border caret-transparent blur-0">
        <p className="text-zinc-500 box-border caret-transparent mb-4">
          I picked up my
          <button className="bg-transparent caret-transparent text-center p-0">
            first camera
          </button>
          on an internship in Japan.{" "}
          <br className="box-border caret-transparent hidden md:block" />
          Work featured in the
          <a
            href="https://www.businessinsider.com/student-builds-nuclear-fusion-prototype-using-ai-glowing-plasma-orb-2024-9"
            className="box-border caret-transparent decoration-blue-700/40 underline"
          >
            Business Insider
          </a>
          . Viral on
          <a
            href="https://www.reddit.com/r/japanpics/comments/1fvku8r/i_bought_my_first_camera_secondhand_in_japan/"
            className="box-border caret-transparent decoration-orange-700/40 underline"
          >
            r/japanpics
          </a>
          .
        </p>
      </div>
      <PhotoGallery />
    </div>
  );
};
