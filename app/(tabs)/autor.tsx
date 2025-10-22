import React, { useState } from "react";
import { Image } from "expo-image";
import { StyleSheet, TouchableOpacity } from "react-native";

import ParallaxScrollView from "@/components/parallax-scroll-view";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import AutorModal from "@/components/modals/autorModal";
import Autor from "@/components/autor/autor";
import { Iautor } from "@/Interfaces/Iautor";

export default function AutorScreen() {
    const [modalVisible, setModalVisible] = useState(false);
    const [autor, setAutor] = useState<Iautor[]>([{
    id: 1,
        nome: " George R.R. Martin",
        bio: "George R.R. Martin is the globally bestselling author of many fine novels, including A Game of Thrones.",
    }]);


    function handleAddAutor(nome: string, bio: string) {
        const newAutor = {
            id: Math.random() * 1000,
            nome,
            bio
        };
        setAutor([...autor, newAutor]);
        setModalVisible(false);
    }

    return (
        <ParallaxScrollView
            headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
            headerImage={
                <Image
                    source={require("@/assets/images/livros.jpg")}
                    style={styles.reactLogo}
                />
            }
        >
            <ThemedView style={styles.titleContainer}>
                <ThemedText type="title">Autores </ThemedText>
            </ThemedView>

            <ThemedView style={styles.stepContainer}>
                <ThemedText>Adicione, edite ou remova autores da sua lista.</ThemedText>
            </ThemedView>

            <TouchableOpacity onPress={() => setModalVisible(true)}>
                <ThemedText style={styles.addButton}>+</ThemedText>
            </TouchableOpacity>

            <AutorModal
                visible={modalVisible}
                onAdd={handleAddAutor} 
                onClose={() => setModalVisible(false)}
            />

            {autor.map((autor) => (
                <Autor
                    key={autor.id}
                    nome={autor.nome}
                    bio={autor.bio}
                />
            ))}
        </ParallaxScrollView>
    );
}

const styles = StyleSheet.create({
    titleContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
    },
    stepContainer: {
        gap: 8,
        marginBottom: 8,
    },
    reactLogo: {
        width: 500,
        height: 300,
        alignSelf: "center",
    },
    addButton: {
        backgroundColor: "#1D3D47",
        color: "#FFFFFF",
        fontSize: 32,
        textAlign: "center",
        borderRadius: 20,
        padding: 5,
        marginTop: 20,

    },
});
