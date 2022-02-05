import { useCallback, useEffect, useState } from 'react';

type imageObjectArray = {
  name: string;
  id: string;
  image: string;
}[];

const useImageRotation = (
  imageObjectArray: imageObjectArray
): imageObjectArray => {
  const [imageObject, setImageObject] = useState(imageObjectArray[0]);

  const imageObjectsSegment = useCallback(() => {
    const imageObjects = imageObjectArray;
    const imageObjectLocation = imageObjectArray.findIndex(
      (object) => object === imageObject
    );

    if (imageObjectLocation === 0) {
      return [...imageObjects];
    } else {
      return [
        imageObjects[imageObjectLocation],
        ...imageObjects.slice(imageObjectLocation + 1),
        ...imageObjects.slice(0, imageObjectLocation - 1)
      ];
    }
  }, [imageObject, imageObjectArray]);

  useEffect(() => {
    const imageObjectRotate = setInterval(() => {
      const imageSegment = imageObjectsSegment();

      setImageObject(imageSegment[1]);
    }, 5000);

    return () => clearInterval(imageObjectRotate);
  }, [imageObjectsSegment]);

  return [imageObject];
};

export default useImageRotation;