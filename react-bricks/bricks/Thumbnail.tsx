import React from 'react'
import { types, Text, RichText, Image } from 'react-bricks/frontend'

interface ThumbnailProps {
	hasShadow: boolean
	bgColor: types.IColor
}

const Thumbnail: types.Brick<ThumbnailProps> = ({ hasShadow, bgColor, ...rest }) => {
	return (
		<div
			{...rest}
			className={`my-6 p-6 text-center border rounded-lg ${hasShadow ? 'shadow-xl' : ''
				} ${bgColor?.className}`}
		>
			<Image
				propName="image"
				alt="Fallback alt tag"
				maxWidth={200}
				imageClassName="mb-6"
			/>
			<Text
				propName="title"
				renderBlock={({ children }) => (
					<h1 className="text-2xl font-bold">{children}</h1>
				)}
				placeholder="Type a title..."
			/>
			<RichText
				propName="description"
				renderBlock={({ children }) => (
					<p className="text-lg text-gray-500">{children}</p>
				)}
				placeholder="Type a description"
				allowedFeatures={[
					types.RichTextFeatures.Bold,
					types.RichTextFeatures.Highlight,
				]}
				renderHighlight={({ children }) => (
					<span className="px-1 rounded bg-blue-200 text-blue-900">
						{children}
					</span>
				)}
			/>
		</div>
	)
}

Thumbnail.schema = {
	name: 'thumbnail',
	label: 'Thumbnail',
	hideFromAddMenu: true,
	getDefaultProps: () => (
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
		}),
	sideEditProps: [
		{
			name: 'hasShadow',
			label: 'Shadow',
			type: types.SideEditPropType.Boolean,
		},
		{
			name: 'bgColor',
			label: 'Background',
			type: types.SideEditPropType.Select,
			selectOptions: {
				display: types.OptionsDisplay.Color,
				options: [
					{
						label: 'White',
						value: { color: '#ffffff', className: 'bg-white' },
					},
					{
						label: 'Light blue',
						value: { color: '#eff6ff', className: 'bg-blue-50' },
					},
				],
			},
		},
	],
}

export default Thumbnail