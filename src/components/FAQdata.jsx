


const data={
    rows: [
        {
            title: "What is Netflix",
            content: `Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.

            You can watch as much as you want, whenever you want without a single commercial – 
            all for one low monthly price. 
            There's always something new to discover and new TV shows and movies are added every week!`,
        },
        {
            title: "How much does Netflix costs?",
            content:
                "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from Rs250 to Rs1,100 a month. No extra costs, no contracts.",
        },
        {
            title: "How do I cancel?",
            content: `Netflix is flexible. There are no pesky contracts and no commitments. 
            You can easily cancel your account online in two clicks. 
            There are no cancellation fees – start or stop your account anytime. `,
        },
        {
            title: "How can I watch on Netflix?",
            content: "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.",
        },
    ],
};

const styles={
    bgColor:"#303030",
    rowTitleColor: "#FFFFFF",
    rowContentColor: '#FFFFFF',
    arrowColor: "#FFFFFF",
    rowContentTextSize:"22px",
    rowTitleTextSize:"24px",
}

const config = {
    animate: true,
    arrowIcon: "+",
    tabFocus: true
};

export default data;
export {config, styles};