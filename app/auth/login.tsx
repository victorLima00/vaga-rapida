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
  Dimensions,
  ImageBackground,
  Animated,
  ActivityIndicator
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useRouter, Link } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { PRIMARY_BLUE, TEXT_DARK, TEXT_GRAY, WHITE, BG_LIGHT, BORDER_COLOR, LIGHT_BLUE } from '@/constants/Colors';
import Logo from '@/components/Logo';

const { width, height } = Dimensions.get('window');
const CARD_WIDTH = width * 0.9;

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async () => {
    if (!email || !password) {
      // You should add proper validation and error messaging here
      return;
    }
    
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      // Navigate to main app after successful login
      router.replace('/(tabs)');
    }, 1500);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      
      {/* Background decoration */}
      <View style={styles.backgroundTop} />
      <View style={styles.backgroundTopCircle} />
      <View style={styles.backgroundMiddleCircle} />
      
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardAvoidContainer}
      >
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.logoContainer}>
            <Logo size={120} textColor={WHITE} />
          </View>
          
          <View style={styles.cardContainer}>
            <Text style={styles.welcomeText}>Bem-vindo de volta!</Text>
            <Text style={styles.instructionText}>
              Faça login para encontrar a melhor vaga
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

            <View style={styles.inputContainer}>
              <Ionicons name="lock-closed-outline" size={22} color={TEXT_GRAY} style={styles.inputIcon} />
              <TextInput
                style={styles.input}
                placeholder="Senha"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={!showPassword}
                autoCapitalize="none"
                placeholderTextColor={TEXT_GRAY}
              />
              <TouchableOpacity 
                style={styles.passwordToggle} 
                onPress={() => setShowPassword(!showPassword)}
              >
                <Ionicons 
                  name={showPassword ? "eye-off-outline" : "eye-outline"} 
                  size={22} 
                  color={TEXT_GRAY}
                />
              </TouchableOpacity>
            </View>

            <Link href="/auth/recover" asChild>
              <TouchableOpacity style={styles.forgotPassword}>
                <Text style={styles.forgotPasswordText}>Esqueceu sua senha?</Text>
              </TouchableOpacity>
            </Link>

            <TouchableOpacity 
              style={styles.button} 
              onPress={handleLogin}
              disabled={isLoading}
            >
              {isLoading ? (
                <ActivityIndicator color={WHITE} />
              ) : (
                <>
                  <Text style={styles.buttonText}>Entrar</Text>
                  <Ionicons name="arrow-forward" size={20} color={WHITE} style={styles.buttonIcon} />
                </>
              )}
            </TouchableOpacity>

            <View style={styles.registerContainer}>
              <Text style={styles.registerText}>Não tem uma conta? </Text>
              <Link href="/auth/register" asChild>
                <TouchableOpacity>
                  <Text style={styles.registerLink}>Cadastre-se</Text>
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
    height: height * 0.35,
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
  backgroundMiddleCircle: {
    position: 'absolute',
    top: height * 0.25,
    left: -30,
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: LIGHT_BLUE,
    opacity: 0.2,
  },
  keyboardAvoidContainer: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 40,
  },
  logoContainer: {
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 40,
  },
  cardContainer: {
    backgroundColor: WHITE,
    borderRadius: 20,
    padding: 20,
    marginHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: TEXT_DARK,
    marginBottom: 8,
  },
  instructionText: {
    fontSize: 14,
    color: TEXT_GRAY,
    marginBottom: 30,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: BORDER_COLOR,
    borderRadius: 12,
    marginBottom: 16,
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
  passwordToggle: {
    padding: 8,
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginBottom: 24,
  },
  forgotPasswordText: {
    color: PRIMARY_BLUE,
    fontSize: 14,
    fontWeight: '500',
  },
  button: {
    backgroundColor: PRIMARY_BLUE,
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'center',
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
  buttonIcon: {
    marginLeft: 8,
  },
  registerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 15,
  },
  registerText: {
    color: TEXT_GRAY,
    fontSize: 14,
  },
  registerLink: {
    color: PRIMARY_BLUE,
    fontSize: 14,
    fontWeight: 'bold',
  },
}); 