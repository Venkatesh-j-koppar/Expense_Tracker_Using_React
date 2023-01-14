//display logic to show data to date
export const sortByDate = (dateObject, dataObject) => {
  let sortData = dataObject.filter(
    (data) =>
      data.date >= dateObject.startdate && data.date <= dateObject.enddate
  );
  console.log(sortData);
  return sortData;
};
