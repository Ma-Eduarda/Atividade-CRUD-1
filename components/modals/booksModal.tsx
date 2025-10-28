import React, { useState } from "react";
import { Modal, StyleSheet, TouchableOpacity, View, TextInput, Text } from "react-native";

export type BooksModalProps = {
    visible: boolean;
    onAdd: (title: string, description: string, image: string) => void;
    onClose: () => void;
};

export default function BooksModal({ visible, onClose, onAdd }: BooksModalProps) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");

    function handleAdd() {

        onAdd(title, description, image);

        setTitle("");
        setDescription("");
        setImage("");
        onClose();
    }

    return (
        <Modal visible={visible} animationType="fade" transparent={true}>
            <View style={styles.overlay}>
                <View style={styles.modalContent}>
                    <Text style={styles.header}>Novo Livro</Text>

                    <TextInput
                        placeholder="Título"
                        value={title}
                        onChangeText={setTitle}
                        style={styles.input}
                    />

                    <TextInput
                        placeholder="Descrição"
                        value={description}
                        onChangeText={setDescription}
                        style={[styles.input, { height: 70 }]}
                        multiline
                    />

                    <TextInput
                        placeholder="URL da imagem"
                        value={image}
                        onChangeText={setImage}
                        style={styles.input}
                    />

                    <TouchableOpacity style={styles.addButton} onPress={handleAdd}>
                        <Text style={styles.addButtonText}>Adicionar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={onClose} style={styles.closeButton}>
                        <Text style={styles.closeButtonText}>Cancelar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: "rgba(0, 0, 0, 0.5)", 
        justifyContent: "center",
        alignItems: "center",
    },
    modalContent: {
        width: "80%", 
        backgroundColor: "#fff",
        borderRadius: 12,
        padding: 20,
        shadowColor: "#000",
        shadowOpacity: 0.3,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        elevation: 5,
    },
    header: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
        padding: 10,
        marginBottom: 12,
    },
    addButton: {
        backgroundColor: "#1D3D47",
        padding: 10,
        borderRadius: 8,
        marginTop: 5,
    },
    addButtonText: {
        color: "#fff",
        textAlign: "center",
        fontWeight: "bold",
    },
    closeButton: {
        backgroundColor: "#ccc",
        padding: 10,
        borderRadius: 8,
        marginTop: 10,
    },
    closeButtonText: {
        color: "#333",
        textAlign: "center",
        fontWeight: "bold",
    },
});
