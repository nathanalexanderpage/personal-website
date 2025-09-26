import './App.css';

export default function LinkCard({
  titleElement,
  uri,
  imageUri,
  imageAltText,
  descriptionElements,
}) {
  return (
    <div>
      <a href={uri}>
        {titleElement}
      </a>
      {
        imageUri && (
          <img src={imageUri} alt={imageAltText} />
        )
      }
      {
        descriptionElements
      }
    </div>
  );
}
