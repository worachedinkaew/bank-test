/*
 Navicat Premium Data Transfer

 Source Server         : Local
 Source Server Type    : MySQL
 Source Server Version : 50732
 Source Host           : localhost:3306
 Source Schema         : seekster_db

 Target Server Type    : MySQL
 Target Server Version : 50732
 File Encoding         : 65001

 Date: 13/04/2022 12:57:16
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for orders
-- ----------------------------
DROP TABLE IF EXISTS `orders`;
CREATE TABLE `orders` (
  `serviceId` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `customerId` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `createdAt` datetime NOT NULL,
  `_id` varchar(36) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of orders
-- ----------------------------
BEGIN;
INSERT INTO `orders` VALUES ('fd109cf0-a682-4200-be98-f5ca7761eae4', '68c6c737-31d5-4e37-98a2-8a4d01607aa6', '2022-04-13 12:56:46', '81b81c9c-68fe-4af4-bbce-22cdfafd4b51');
INSERT INTO `orders` VALUES ('ce49f0dd-7242-4aaa-b799-1b23004d0543', '68c6c737-31d5-4e37-98a2-8a4d01607aa6', '2022-04-13 12:56:30', '9382d160-e0c8-4bae-81fd-9d4062abe9af');
COMMIT;

-- ----------------------------
-- Table structure for service
-- ----------------------------
DROP TABLE IF EXISTS `service`;
CREATE TABLE `service` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `picture` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `_id` varchar(36) COLLATE utf8_unicode_ci NOT NULL,
  `description` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `price` decimal(10,2) DEFAULT NULL,
  PRIMARY KEY (`_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of service
-- ----------------------------
BEGIN;
INSERT INTO `service` VALUES ('ทำความสะอาดใหญ่', 'https://seekster-company.oss-ap-southeast-1.aliyuncs.com/workforce-production/XvSGwMGAbwKKSWZedkrTFriZ?OSSAccessKeyId=LTAI5tKiQdVkorHkqT7P2mdu&Expires=1649831011&Signature=jBEJIYRWGtxWwsnwQS5hT9YfJZY%3D', 'cb8d8b98-f6f0-44a0-aa74-9b4b812ab970', '', 4500.00);
INSERT INTO `service` VALUES ('บริการพ่นฆ่าเชื้อ (แบบสเปรย์)', 'https://seekster-company.oss-ap-southeast-1.aliyuncs.com/workforce-production/CD4zDuubQJJHLdmizqL1ZmS3?OSSAccessKeyId=LTAI5tKiQdVkorHkqT7P2mdu&Expires=1649829768&Signature=4Zgi6V7ojWqUinAMWl9OQH6XJmc%3D', 'ce49f0dd-7242-4aaa-b799-1b23004d0543', '', 2100.00);
INSERT INTO `service` VALUES ('ทำความสะอาด ออฟฟิศ', 'https://seekster-company.oss-ap-southeast-1.aliyuncs.com/workforce-production/z2NjyEKuX6nmAhsVk1Jen3Nu?OSSAccessKeyId=LTAI5tKiQdVkorHkqT7P2mdu&Expires=1649831011&Signature=Csu6H04yosve%2F7rjaNY345lyiCc%3D', 'e24bc17c-81e7-44ce-97c2-71fed9b47cab', '-', 549.00);
INSERT INTO `service` VALUES ('ตรวจโควิด-19 ถึงที่', 'https://seekster-company.oss-ap-southeast-1.aliyuncs.com/workforce-production/TsT7Rza8PaRSYYT2aLJ2aM5T?OSSAccessKeyId=LTAI5tKiQdVkorHkqT7P2mdu&Expires=1649830973&Signature=DklKfxsN53RIoOimJe7AdS%2FIEOY%3D', 'fd109cf0-a682-4200-be98-f5ca7761eae4', '', 4500.00);
COMMIT;

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `username` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `fullName` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `_id` varchar(36) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of user
-- ----------------------------
BEGIN;
INSERT INTO `user` VALUES ('testusername', '$2b$10$iF9QObiwej2xVphExBSLFOdc.tt15ACoIeDsl4s65y0RUCii.NwC.', 'test', '68c6c737-31d5-4e37-98a2-8a4d01607aa6');
INSERT INTO `user` VALUES ('test1', '$2b$10$4CCJrCbKss8Ge/I2AMejNOJIKbxQYpPhQsL3QzntsVIM7UUnBA2sS', 'test3', '8f42d450-f354-4107-af1d-35157e3ac6e8');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
