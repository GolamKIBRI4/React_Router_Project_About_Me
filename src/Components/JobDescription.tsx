import { useState } from "react";

interface Props {
  description: string;
  MaxWord?: number;
}
const JobDescription = ({ description, MaxWord = 20 }: Props) => {
  const [isExpand, setIsExpand] = useState(false);

  if (description.length <= MaxWord) return <p>{description}</p>;

  const text = isExpand ? description : description.substring(0, MaxWord);

  return (
    <p>
      {text}...
      <button className="btn" onClick={() => setIsExpand(!isExpand)}>
        {isExpand ? "Less" : "More"}
      </button>
    </p>
  );
};

export default JobDescription;
