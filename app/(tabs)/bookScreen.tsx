import React, { useState } from "react";
import { Image } from "expo-image";
import { StyleSheet, TouchableOpacity } from "react-native";

import ParallaxScrollView from "@/components/parallax-scroll-view";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import BooksModal from "@/components/modals/booksModal";
import Books from "@/components/books/books";
import { IBook } from "@/Interfaces/IBooks";

export default function BookScreen() {
    const [modalVisible, setModalVisible] = useState(false);
    const [books, setBooks] = useState<IBook[]>([{
    id: 1,
        title: " Guerra dos Tronos: volume 1",
        description: "O verão pode durar décadas. O inverno, toda uma vida. E a guerra dos tronos começou.",
        image: "https://m.media-amazon.com/images/I/91+1SUO3vUL._SY425_.jpg"
    },
    {
    id: 2,
        title: "Harry Potter e a Pedra Filosofal: 1",
        description: "Harry Potter é um garoto cujos pais, feiticeiros, foram assassinados por um poderosíssimo bruxo quando ele ainda era um bebê.",
        image: "https://m.media-amazon.com/images/I/81ibfYk4qmL._SL1500_.jpg"
    }]);


    function handleAddBook(title: string, description: string, image: string) {
        const newBook = {
            id: Math.random() * 1000,
            title,
            description,
            image
        };
        setBooks([...books, newBook]);
        setModalVisible(false);
    }

    return (
        <ParallaxScrollView
            headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
            headerImage={
                <Image
                    source={require("@/assets/images/livros.png")}
                    style={styles.reactLogo}
                />
            }
        >
            <ThemedView style={styles.titleContainer}>
                <ThemedText type="title">Lista de livros 📚 </ThemedText>
            </ThemedView>

            <ThemedView style={styles.stepContainer}>
                <ThemedText>Adicione, edite ou remova livros da sua lista.</ThemedText>
            </ThemedView>

            <TouchableOpacity onPress={() => setModalVisible(true)}>
                <ThemedText style={styles.addButton}>+</ThemedText>
            </TouchableOpacity>

            <BooksModal
                visible={modalVisible}
                onAdd={handleAddBook} 
                onClose={() => setModalVisible(false)}
            />

            {books.map((book) => (
                <Books
                    key={book.id}
                    title={book.title}
                    description={book.description}
                    image={book.image}
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
        fontSize: 30,
        textAlign: "center",
        borderRadius: 20,
        marginBottom: 10,
        padding: 5,
        paddingTop: 5,
    },
});
