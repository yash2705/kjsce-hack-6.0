import React from "react";
import Card from "./Card";
const Features = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.largeFont}>All Features</div>
      <div className={styles.cardContainer}>
        {features.map((feature) => {
          return (
            <Card
              key={feature.id}
              title={feature.title}
              description={feature.description}
              image={feature.image}
            />
          );
        })}
      </div>
    </div>
  );
};

const styles = {
  largeFont: `text-3xl text-black font-medium text-center mt-6`,
  wrapper: `items-center space-y-4`,
  cardContainer: `max-w-6xl p-4 lg:mx-auto lg:my-auto md:grid md:grid-cols-3 space-y-4 ml-8 mr-8 md:gap-4 lg:gap-8 items-center min-h-max md:space-y-0`,
};

const features = [
  {
    id: 1,
    title: "Generate Medical Reports",
    description: "Generate NFTs of the medical reports",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/NFT_Icon.png/640px-NFT_Icon.png",
  },
  {
    id: 2,
    title: "100% Anonymity",
    description: "0% commisions on all donations you recieve",
    image:
      "data:image/png;base64,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",
  },
  {
    id: 3,
    title: "Fully Decentralized",
    description: "Encouragement from supporters.",
    image: "https://cdn-icons-png.flaticon.com/512/2586/2586159.png",
  },
  {
    id: 4,
    title: "100% Authenticity",
    description: "Ensure the authenticity of your documents.",
    image:
      "https://cdn.iconscout.com/icon/free/png-256/hundred-full-score-100-37852.png",
  },
  {
    id: 5,
    title: "Safe and Secure",
    description: "No need to give us your bank/aadhar card details.",
    image:
      "https://ourbigitalianadventure.com/wp-content/uploads/2016/11/bank-non.png",
  },
  {
    id: 6,
    title: "Medical Reports at your FingerTips",
    description: "One Stop solution for all your medical reports.",
    image:
      "https://p.kindpng.com/picc/s/160-1608792_circle-document-icon-png-transparent-png.png",
  },
];

export default Features;
