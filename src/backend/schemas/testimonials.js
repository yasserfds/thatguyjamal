export default {
    name: "testimonials",
    title: "Testimonials",
    type: "document",
    fields: [
        {
            name: "name",
            title: "Name",
            type: "string"
        },
        {
            name: "company",
            title: "ImgURL",
            type: "image",
            options: {
                // Allows users to crop an image when they upload it.
                hotspot: true
            }
        },
        {
            name: "feedback",
            title: "Feedback",
            type: "string"
        },
    ]
}