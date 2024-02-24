import React, { useEffect, useState } from "react";
import axios from "axios";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import SideArrow from "../assets/icons/side_arrow.png";
import SpecialtiesCarousel from "../components/SpecialtiesCarousel";
import TherapistInfoCard from "../components/TherapistInfoCard";
import PageHeader from "../components/PageHeader";

const TherapistsScreen = () => {
  const [specialties, setSpecialties] = useState([]);
  const [selectedSpecialty, setSelectedSpecialty] = useState(null);
  const [therapists, setTherapists] = useState([]);

  useEffect(() => {
    const fetchSpecialties = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/specialties"
        );
        setSpecialties(response.data);
        setSelectedSpecialty(response.data[0]);
      } catch (error) {
        console.error("Error fetching specialties:", error);
      }
    };

    fetchSpecialties();
  }, []);

  useEffect(() => {
    const fetchTherapists = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/therapists"
        );
        setTherapists(response.data);
      } catch (error) {
        console.error("Error fetching therapists:", error);
      }
    };

    fetchTherapists();
  }, []);

  return (
    <View>
      <PageHeader
        title="Explore Therapists"
        subtitle="Professional, licensed, and vetted therapists who you can trust."
      />

      <View className="px-6 pt-6 pb-4 border-b-0.5 border-solid border-b-mindflexGreen">
        <TouchableOpacity className="flex-row items-center gap-2">
          <Image source={SideArrow} className="w-3 h-3" />
          <Text className="underline text-mindflexGreen">
            Go to My Sessions
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        <SpecialtiesCarousel
          specialties={specialties}
          selectedSpecialty={selectedSpecialty}
          onSelectSpecialty={setSelectedSpecialty}
        />
        <TherapistInfoCard therapists={therapists} />
      </ScrollView>
    </View>
  );
};

export default TherapistsScreen;
