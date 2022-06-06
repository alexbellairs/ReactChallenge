const ImgLink = ({ file, altText, link, para }) => {
  return (
    <div>
      <a href={link}>
        {" "}
        <img src={file} alt={altText} />
      </a>
      <p>{para}</p>
    </div>
  );
};

export default ImgLink;
