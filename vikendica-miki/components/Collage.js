import React, {useState} from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import CloseIcon from '@mui/icons-material/Close';

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function Collage() {
    const [model,setModel]=useState(false)
    const [tempImg,setTempImg]=useState('')

    const getImg=(img)=>{
        setTempImg(img)
        setModel(true)
    }

  return (
    <>
        <div className={model?"model open":"model"}>
            <img src={tempImg} />
            <CloseIcon onClick={()=>setModel(false)} />
        </div>
        <ImageList
        variant="quilted"
        cols={4}
        rowHeight={121}
        >
        {itemData.map((item) => (
            <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
            <img className='pics'
                {...srcset(item.img, 121, item.rows, item.cols)}
                alt={item.title}
                onClick={()=>getImg(item.img)}
            />
            </ImageListItem>
        ))}
        </ImageList>
    </>
  );
}

const itemData = [
  {
    img: '/profile.jpg',
    title: 'Breakfast',
    rows: 2,
    cols: 2,
  },
  {
    img: '/home-hero.jpg',
    title: 'Burger',
  },
  {
    img: '/about-hero.jpg',
    title: 'Camera',
  },
  {
    img: '/miki.jpg',
    title: 'Coffee',
    cols: 2,
  },
  {
    img: '/outer-view.jpg',
    title: 'Hats',
    cols: 2,
  },
  {
    img: '/dron-view1.jpg',
    title: 'Honey',
    author: '@arwinneil',
    rows: 2,
    cols: 2,
  },
  {
    img: '/dron-view2.jpg',
    title: 'Basketball',
  },
  {
    img: '/dron-view3.jpg',
    title: 'Fern',
  },
  {
    img: '/dron-view4.jpg',
    title: 'Mushrooms',
    rows: 2,
    cols: 2,
  },
  {
    img: '/dron-view5.jpg',
    title: 'Tomato basil',
  },
  {
    img: '/outer1.jpg',
    title: 'Sea star',
  },
  {
    img: '/outer2.jpg',
    title: 'Bike',
    cols: 2,
  },
  {
    img: '/outer3.jpg',
    title: 'Bike'
  },
  {
    img: '/outer4.jpg',
    title: 'Bike',
  },
  {
    img: '/outer5.jpg',
    title: 'Bike',
    cols: 2,
    rows: 2
  },
  {
    img: '/outer6.jpg',
    title: 'Bike',
    cols: 2,
  },
  {
    img: '/indoor1.jpg',
    title: 'Bike',
    rows: 2,
    cols: 2,
  },
  {
    img: '/indoor2.jpg',
    title: 'Bike',
    cols: 2,
  },
  {
    img: '/indoor3.jpg',
    title: 'Bike',
  },
  {
    img: '/indoor4.jpg',
    title: 'Bike',
  },
  {
    img: '/indoor5.jpg',
    title: 'Bike',
    cols: 2,
  },
  {
    img: '/indoor6.jpg',
    title: 'Bike',
    cols: 2,
    rows: 2
  },
  {
    img: '/indoor7.jpg',
    title: 'Bike',
  },
  {
    img: '/indoor8.jpg',
    title: 'Bike',
    
  },
  {
    img: '/indoor9.jpg',
    title: 'Bike',
    cols: 2,
    rows: 2
  },
  {
    img: '/indoor10.jpg',
    title: 'Bike',
    cols: 2,
  },
  {
    img: '/indoor11.jpg',
    title: 'Bike',
  },
  {
    img: '/indoor12.jpg',
    title: 'Bike',
  },
  {
    img: '/indoor13.jpg',
    title: 'Bike',
    cols: 2,
    rows: 2
  },
  {
    img: '/indoor14.jpg',
    title: 'Bike',
    cols: 2,
    rows: 2
  },
];