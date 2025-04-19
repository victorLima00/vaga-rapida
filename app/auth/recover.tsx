import React, { useState } from 'react';
import { 
  StyleSheet, 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  KeyboardAvoidingView, 
  Platform, 
  ScrollView, 
  Alert,
  Dimensions,
  ActivityIndicator
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useRouter, Link } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { PRIMARY_BLUE, TEXT_DARK, TEXT_GRAY, WHITE, BG_LIGHT, BORDER_COLOR, LIGHT_BLUE, SUCCESS_GREEN } from '@/constants/Colors';
import Logo from '@/components/Logo';

const { width, height } = Dimensions.get('window');

export default function RecoverPasswordScreen() {
  const [email, setEmail] = useState('');
  const [isSent, setIsSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSendRecoveryEmail = () => {
    // Validate email
    if (!email || !email.includes('@')) {
      Alert.alert('Erro', 'Por favor, informe um email válido');
      return;
    }

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSent(true);
    }, 1500);
  };

  const handleBackToLogin = () => {
    router.replace('/auth/login');
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      
      {/* Background decoration */}
      <View style={styles.backgroundTop} />
      <View style={styles.backgroundTopCircle} />
      
      <TouchableOpacity 
        style={styles.backButton}
        onPress={() => router.back()}
      >
        <Ionicons name="arrow-back" size={24} color={WHITE} />
      </TouchableOpacity>
      
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardAvoidContainer}
      >
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.logoContainer}>
            <Logo size={90} textColor={WHITE} />
            <Text style={styles.headerText}>Recuperar senha</Text>
          </View>
          
          <View style={styles.cardContainer}>
            {!isSent ? (
              <>
                <Text style={styles.instructions}>
                  Digite seu email e enviaremos instruções para recuperar sua senha.
                </Text>

                <View style={styles.inputContainer}>
                  <Ionicons name="mail-outline" size={22} color={TEXT_GRAY} style={styles.inputIcon} />
                  <TextInput
                    style={styles.input}
                    placeholder="Email"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    placeholderTextColor={TEXT_GRAY}
                  />
                </View>

                <TouchableOpacity 
                  style={styles.button} 
                  onPress={handleSendRecoveryEmail}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <ActivityIndicator color={WHITE} />
                  ) : (
                    <Text style={styles.buttonText}>Enviar instruções</Text>
                  )}
                </TouchableOpacity>
              </>
            ) : (
              <View style={styles.successContainer}>
                <View style={styles.successIconContainer}>
                  <Ionicons name="checkmark" size={40} color={WHITE} />
                </View>
                <Text style={styles.successTitle}>Email enviado!</Text>
                <Text style={styles.successText}>
                  Verifique seu email e siga as instruções para recuperar sua senha.
                </Text>
                <TouchableOpacity style={styles.button} onPress={handleBackToLogin}>
                  <Text style={styles.buttonText}>Voltar para login</Text>
                </TouchableOpacity>
              </View>
            )}

            <View style={styles.loginContainer}>
              <Text style={styles.loginText}>Lembrou sua senha? </Text>
              <Link href="/auth/login" asChild>
                <TouchableOpacity>
                  <Text style={styles.loginLink}>Entrar</Text>
                </TouchableOpacity>
              </Link>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WHITE,
  },
  backgroundTop: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: height * 0.28,
    backgroundColor: PRIMARY_BLUE,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  backgroundTopCircle: {
    position: 'absolute',
    top: -50,
    right: -50,
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: LIGHT_BLUE,
    opacity: 0.3,
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
    zIndex: 100,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255,255,255,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  keyboardAvoidContainer: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 40,
  },
  logoContainer: {
    marginTop: 70,
    alignItems: 'center',
    marginBottom: 30,
  },
  headerText: {
    color: WHITE,
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 15,
    textAlign: 'center',
  },
  cardContainer: {
    backgroundColor: WHITE,
    borderRadius: 20,
    padding: 24,
    marginHorizontal: 20,
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  instructions: {
    fontSize: 14,
    color: TEXT_GRAY,
    marginBottom: 24,
    textAlign: 'center',
    lineHeight: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: BORDER_COLOR,
    borderRadius: 12,
    marginBottom: 24,
    paddingHorizontal: 12,
    height: 55,
    backgroundColor: BG_LIGHT,
  },
  inputIcon: {
    marginRight: 12,
  },
  input: {
    flex: 1,
    height: '100%',
    fontSize: 16,
    color: TEXT_DARK,
  },
  button: {
    backgroundColor: PRIMARY_BLUE,
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: PRIMARY_BLUE,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 8,
  },
  buttonText: {
    color: WHITE,
    fontSize: 18,
    fontWeight: 'bold',
  },
  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 15,
  },
  loginText: {
    color: TEXT_GRAY,
    fontSize: 14,
  },
  loginLink: {
    color: PRIMARY_BLUE,
    fontSize: 14,
    fontWeight: 'bold',
  },
  successContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
  },
  successIconContainer: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: SUCCESS_GREEN,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    shadowColor: SUCCESS_GREEN,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 4,
  },
  successTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: TEXT_DARK,
    marginBottom: 10,
  },
  successText: {
    fontSize: 14,
    color: TEXT_GRAY,
    textAlign: 'center',
    marginBottom: 30,
    lineHeight: 20,
  },
}); 