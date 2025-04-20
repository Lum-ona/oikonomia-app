import { StyleSheet } from "react-native";
import React from "react";
import ScreenWrapper from "@/components/layouts/ScreenWrapper";
import VendorProducts from "@/components/vendors/VendorProducts";
import VendorHeader from "@/components/vendors/VendorHeader";

const VendorPage = () => {
  return (
    <ScreenWrapper>
      <VendorHeader />
      <VendorProducts />
    </ScreenWrapper>
  );
};

export default VendorPage;

const styles = StyleSheet.create({});
