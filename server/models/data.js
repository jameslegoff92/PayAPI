const getData = require('../js/utility/getData');

module.exports = class Data {

  static getPartnerData() {
    return getData.getFileData().partners;
  }

  static getServicesData() {
    return getData.getFileData().services;
  }

  static getPricingData() {
    return getData.getFileData().prices;
  }

  static getFeatures() {
    return getData.getFileData().features;
  }

  static getValues() {
    return getData.getFileData().values;
  }

  static getStats() {
    return getData.getFileData().stats;
  }
}