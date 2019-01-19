export const getContent = index => ({
  header: `Hey, how are you. I am component no. ${index}`,
  text:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
});

const map = {
  1: {
    background: "red"
  },
  2: {
    background: "skyblue"
  },
  3: {
    background: "grey"
  }
};

export const getStyles = (index, extra = {}) => ({
  ...map[index],
  padding: 10,
  marginBottom: 20,
  color: "white",
  fontFamily: "Tahoma, sans-serif",
  borderRadius: 5,
  ...extra
});
