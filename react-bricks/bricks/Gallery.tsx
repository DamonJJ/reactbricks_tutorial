import React from 'react'
import { types, Repeater } from 'react-bricks/frontend'

const Gallery: types.Brick = () => {
  return (
    <div className="max-w-5xl mx-auto py-8 px-4">
      <h1 className="text-4xl font-bold text-center">Gallery</h1>
      <div className="sm:grid grid-cols-3 gap-5">
        <Repeater propName="thumbnails" />
      </div>
    </div>
  )
}

Gallery.schema = {
  name: 'gallery',
  label: 'Gallery',
  getDefaultProps: () => (
    {
      thumbnails: [
        {
          title: "Hello, world!",
          description: "Lorem ipsum dolor sit amet.",
          hasShadow: true,
          bgColor: {
            color: "#ffffff",
            className: "bg-white"
          },
          image: {
            src: "https://images.reactbricks.com/original/13416c6b-66a3-42bb-88cd-4b0bb42af5c4.webp",
            placeholderSrc: "https://images.reactbricks.com/placeholder/13416c6b-66a3-42bb-88cd-4b0bb42af5c4.jpg",
            srcSet: "https://images.reactbricks.com/src_set/13416c6b-66a3-42bb-88cd-4b0bb42af5c4-400.webp 400w,\nhttps://images.reactbricks.com/src_set/13416c6b-66a3-42bb-88cd-4b0bb42af5c4-300.webp 300w,\nhttps://images.reactbricks.com/src_set/13416c6b-66a3-42bb-88cd-4b0bb42af5c4-200.webp 200w,\nhttps://images.reactbricks.com/src_set/13416c6b-66a3-42bb-88cd-4b0bb42af5c4-100.webp 100w,\nhttps://images.reactbricks.com/src_set/13416c6b-66a3-42bb-88cd-4b0bb42af5c4-50.webp 50w",
            width: 5827,
            height: 3602,
            alt: "Fallback alt tag",
            seoName: ""
          }
        },
        {
          title: "Hello, world!",
          description: "Lorem ipsum dolor sit amet.",
          hasShadow: true,
          bgColor: {
            color: "#ffffff",
            className: "bg-white"
          },
          image: {
            src: "https://images.reactbricks.com/original/13416c6b-66a3-42bb-88cd-4b0bb42af5c4.webp",
            placeholderSrc: "https://images.reactbricks.com/placeholder/13416c6b-66a3-42bb-88cd-4b0bb42af5c4.jpg",
            srcSet: "https://images.reactbricks.com/src_set/13416c6b-66a3-42bb-88cd-4b0bb42af5c4-400.webp 400w,\nhttps://images.reactbricks.com/src_set/13416c6b-66a3-42bb-88cd-4b0bb42af5c4-300.webp 300w,\nhttps://images.reactbricks.com/src_set/13416c6b-66a3-42bb-88cd-4b0bb42af5c4-200.webp 200w,\nhttps://images.reactbricks.com/src_set/13416c6b-66a3-42bb-88cd-4b0bb42af5c4-100.webp 100w,\nhttps://images.reactbricks.com/src_set/13416c6b-66a3-42bb-88cd-4b0bb42af5c4-50.webp 50w",
            width: 5827,
            height: 3602,
            alt: "Fallback alt tag",
            seoName: ""
          }
        },
        {
          title: "Hello, world!",
          description: "Lorem ipsum dolor sit amet.",
          hasShadow: true,
          bgColor: {
            color: "#ffffff",
            className: "bg-white"
          },
          image: {
            src: "https://images.reactbricks.com/original/13416c6b-66a3-42bb-88cd-4b0bb42af5c4.webp",
            placeholderSrc: "https://images.reactbricks.com/placeholder/13416c6b-66a3-42bb-88cd-4b0bb42af5c4.jpg",
            srcSet: "https://images.reactbricks.com/src_set/13416c6b-66a3-42bb-88cd-4b0bb42af5c4-400.webp 400w,\nhttps://images.reactbricks.com/src_set/13416c6b-66a3-42bb-88cd-4b0bb42af5c4-300.webp 300w,\nhttps://images.reactbricks.com/src_set/13416c6b-66a3-42bb-88cd-4b0bb42af5c4-200.webp 200w,\nhttps://images.reactbricks.com/src_set/13416c6b-66a3-42bb-88cd-4b0bb42af5c4-100.webp 100w,\nhttps://images.reactbricks.com/src_set/13416c6b-66a3-42bb-88cd-4b0bb42af5c4-50.webp 50w",
            width: 5827,
            height: 3602,
            alt: "Fallback alt tag",
            seoName: ""
          }
        }
      ]

    }),
  repeaterItems: [
    {
      name: 'thumbnails',
      itemType: 'thumbnail',
      itemLabel: 'Thumbnail',
      max: 3,
    },
  ],
}

export default Gallery