import React, { useState } from 'react';
import { View, Text, TextInput, Image, Button, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import styles from '../styles/ItemDetailsStyles';

const ItemDetails = ({ item, onFavoriteToggle }) => {
  const [question, setQuestion] = useState('');
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [comments, setComments] = useState([]);

  const handleSendQuestion = () => {
    if (question.trim().length <= 100) {
      setQuestions([...questions, question]);
      setQuestion('');
    } else {
      alert("La pregunta no debe exceder los 100 caracteres");
    }
  };

  const handleAddComment = () => {
    if (rating > 0 && comment.trim().length <= 200) {
      setComments([...comments, { comment, rating }]);
      setComment('');
      setRating(0);
    } else {
      alert("Debes agregar un comentario (máx. 200 caracteres) y seleccionar una calificación.");
    }
  };

  const renderStar = (starIndex) => (
    <TouchableOpacity key={starIndex} onPress={() => setRating(starIndex + 1)}>
      <FontAwesome name="star" size={24} color={starIndex < rating ? "gold" : "gray"} />
    </TouchableOpacity>
  );

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{item.name}</Text>
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.description}>{item.description}</Text>
      <Text style={styles.price}>${item.price.toFixed(2)}</Text>
      <Text style={styles.featuresTitle}>Características del producto</Text>
      <Text style={styles.features}>{item.features}</Text>

      <Text style={styles.sectionTitle}>Medios de pago</Text>
      <Text style={styles.paymentMethods}>
        {Array.isArray(item.paymentMethods) ? item.paymentMethods.join(', ') : 'No especificado'}
      </Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Preguntas al vendedor</Text>
        <TextInput
          style={styles.input}
          placeholder="Escribe tu pregunta (máx. 100 caracteres)"
          value={question}
          onChangeText={setQuestion}
          maxLength={100}
        />
        <Button title="Enviar pregunta" onPress={handleSendQuestion} />
        <FlatList
          data={questions}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => <Text style={styles.question}>{item}</Text>}
          ListEmptyComponent={<Text style={styles.emptyText}>No hay preguntas</Text>}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Comentarios y calificación</Text>
        <View style={styles.ratingContainer}>
          {[...Array(5)].map((_, i) => renderStar(i))}
        </View>

        <TextInput
          style={styles.input}
          placeholder="Escribe tu comentario (máx. 200 caracteres)"
          value={comment}
          onChangeText={setComment}
          maxLength={200}
        />
        <Button title="Agregar comentario" onPress={handleAddComment} />
        <FlatList
          data={comments}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.commentContainer}>
              <Text style={styles.commentRating}>Calificación: {item.rating} estrellas</Text>
              <Text>{item.comment}</Text>
            </View>
          )}
          ListEmptyComponent={<Text style={styles.emptyText}>No hay comentarios</Text>}
        />
      </View>
    </ScrollView>
  );
};

export default ItemDetails;
