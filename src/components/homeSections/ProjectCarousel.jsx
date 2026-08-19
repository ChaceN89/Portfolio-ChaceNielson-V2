
/**
 * @file ProjectCarousel.jsx
 * @module ProjectCarousel
 * @desc Responsive multi-device carousel that displays a subset of featured projects.
 *       Uses `react-multi-carousel` for smooth, swipeable behavior and modular `CarouselCard` components.
 * 
 * @features
 * - Auto-plays with hover pause and swipe support
 * - Displays projects with image, name, and category tag
 * - Opens project modals on click
 * - Includes a button to view the full Projects page
 * 
 * @author Chace Nielson
 * @created May 22, 2025
 * @updated Aug 19, 2026
 */
// data - list of projects to display in the carousel
import { carouselProjects } from '@/data/pageData/projectData';

// utils
import { useNavigate } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';

// components
import MyBtn from '@/components/buttons/MyBtn';
import ProjectCard from '@/components/projects/ProjectCard';
import SelectArrow from '../uiElements/SelectArrow';

// Library components
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  desktop: { breakpoint: { max: 3000, min: 1280 }, items: 4, partialVisibilityGutter: 40 },
  laptop: { breakpoint: { max: 1280, min: 768 }, items: 3, partialVisibilityGutter: 30 },
  tablet: { breakpoint: { max: 768, min: 464 }, items: 2, partialVisibilityGutter: 30 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1, partialVisibilityGutter: 30 }
};

export default function ProjectCarousel() {
  const navigate = useNavigate();
  const { ref, inView } = useInView({
    threshold: 0.35,
  });

  return (
    <div ref={ref} className='flex flex-col items-center justify-center gap-4 py-8 '>
      <Carousel
        responsive={responsive}
        infinite
        arrows
        autoPlay={inView}
        autoPlaySpeed={2000}
        keyBoardControl
        pauseOnHover
        draggable
        swipeable
        customLeftArrow={<SelectArrow direction="left" />}
        customRightArrow={<SelectArrow direction="right" />}
        className="w-full"
        itemClass="px-5 py-1"
      >
        {carouselProjects.map((project) => {
          const hasDisplayImage = Boolean(project.thumbnail?.src || project.images?.[0]?.src);
          if (!hasDisplayImage) return null;

          return (
            <ProjectCard project={project} key={project.id} />
          );
        })}
      </Carousel>

      <MyBtn
        sm
        callBack={() => navigate('/projects')}
        GA_label='Project Carousel See All Button'
      >
        See All Projects
      </MyBtn>
    </div>
  );
}
