module.exports = {
  preset: "react-native",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  setupFiles: ["<rootDir>/setup-jest.js"],
  snapshotSerializers: ["enzyme-to-json/serializer"]
};
