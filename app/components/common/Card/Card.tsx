import { DOMAttributes, FunctionComponent } from "react";

export interface CardProps extends DOMAttributes<HTMLDivElement> {
  title: string;
  description: string;
}

const Card: FunctionComponent<CardProps> = ({
  title,
  description,
  ...divProps
}) => {
  return (
    <div className="ring p-3 cursor-pointer" {...divProps}>
      <div className="mb-2">
        <h5 className="font-serif text-lg capitalize">
          {title.slice(0, 20)}...
        </h5>
      </div>
      <div>
        <p className="font-mono text-sm">{description.slice(0, 50)}...</p>
      </div>
    </div>
  );
};

export default Card;
