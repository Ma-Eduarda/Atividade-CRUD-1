import React, { useState } from "react";
import { Modal, StyleSheet, TouchableOpacity, View, TextInput, Text } from "react-native";

export type AuthorModalProps = {
    visible: boolean;
    onAdd: (nome: string, bio: string) => void;
    onClose: () => void;
};

export default function AuthorModal({ visible, onClose, onAdd }: AuthorModalProps) {
    const [nome, setNome] = useState("");
    const [bio, setBio] = useState("");

    function handleAdd() {

        onAdd(nome, bio);

        setNome("");
        setBio("");
        onClose();
    }

    return (
        <Modal visible={visible} animationType="fade" transparent={true}>
            <View style={styles.overlay}>
                <View style={styles.modalContent}>
                    <Text style={styles.header}>Novo Autor</Text>

                    <TextInput
                        placeholder="Nome"
                        value={nome}
                        onChangeText={setNome}
                        style={styles.input}
                    />

                    <TextInput
                        placeholder="Bio"
                        value={bio}
                        onChangeText={setBio}
                        style={[styles.input, { height: 70 }]}
                        multiline
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
