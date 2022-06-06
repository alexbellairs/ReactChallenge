const ImageLink = ({ file, altText, link }) => {
  return (
    <div>
      <a href={link}>
        {" "}
        <img src={file} alt={altText} />
      </a>
    </div>
  );
};

export default ImageLink;
