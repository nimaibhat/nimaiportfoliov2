import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Home } from "@/pages/Home";
import { Questions } from "@/pages/Questions";
import { Music } from "@/pages/Music";
import { Project } from "@/pages/Project";
import { NotFound } from "@/pages/NotFound";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/questions" element={<Questions />} />
          <Route path="/music" element={<Music />} />
          <Route path="/p/:id" element={<Project />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
