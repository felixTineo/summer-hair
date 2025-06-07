import Link from "next/link";

export const Card = ({ category }) => {
  const { name, image } = category;
  return (
    <Link href={`/`}>
      <a className="top-categories__item">
        <img src={image} className="js-img" alt="" />
        <div className="top-categories__item-hover">
          <h5>{name}</h5>
          <span>Saber más -</span>
          <i className="icon-arrow-lg"></i>
        </div>
      </a>
    </Link>
  );
};
