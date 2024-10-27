export const splitCarNames = (cars) => {
  const carArray = cars.split(',').map((car) => {
    if (car.length > 5) {
      throw new Error('[ERROR] 자동차 이름은 다섯글자 이하로 작성해주세요.');
    }
    return car;
  });

  return carArray;
};
