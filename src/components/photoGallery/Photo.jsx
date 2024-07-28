import React from 'react'
import LazyLoad from 'react-lazy-load'
import ImageComponent from '../../wrappers/ImageComponent'


function Photo({item, index, openModal }) {

  // const controls = useAnimation();
  // const ref = useRef(null);
  // const inView = useInView(ref, { once: true, margin: '0px 0px -200px 0px' });

  // // chcek to make sure 
  // useEffect(() => {
  //   if (inView) {
  //     controls.start('visible');
  //   }
  // }, [controls, inView]);

  return (
    <div key={index}>
    <div className='flex flex-col max-w-full'>
      <LazyLoad height={300} offsetVertical={300}>
        <div
          className='relative hover:opacity-70'
          style={{ height: '300px', width: '100%' }}
          onClick={() => openModal(index)}
        >
          <ImageComponent
            src={`${process.env.PUBLIC_URL}/gallery-photos/${item.photo}`}
            alt={`Photo ${index + 1}`}
            className='object-cover w-full h-full rounded-sm sm:cursor-pointer'
            blurHash={item.blurhash}
          />
        </div>
      </LazyLoad>
    </div>
  </div>
  )
}

export default Photo