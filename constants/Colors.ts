/**
 * Paleta de cores do SpotPark - Aplicativo para encontrar vagas de estacionamento em tempo real.
 */

// Cores principais
export const PRIMARY_BLUE = '#1D4ED8';
export const LIGHT_BLUE = '#3B82F6';
export const BLUE_GRAY = '#4B5563';
export const WHITE = '#FFFFFF';
export const TEAL = '#0D9488';

// Cores de acento/status
export const SUCCESS_GREEN = '#10B981';  // Vagas disponíveis
export const ERROR_RED = '#EF4444';      // Estacionamentos lotados
export const WARNING_YELLOW = '#F59E0B'; // Poucas vagas

// Cores de fundo e textos
export const BG_LIGHT = '#F9FAFB';
export const TEXT_DARK = '#1F2937';
export const TEXT_GRAY = '#6B7280';
export const BORDER_COLOR = '#E5E7EB';

// Compatibilidade com o tema claro/escuro
const tintColorLight = PRIMARY_BLUE;
const tintColorDark = LIGHT_BLUE;

export const Colors = {
  light: {
    text: TEXT_DARK,
    background: WHITE,
    tint: tintColorLight,
    icon: BLUE_GRAY,
    tabIconDefault: TEXT_GRAY,
    tabIconSelected: PRIMARY_BLUE,
    statusAvailable: SUCCESS_GREEN,
    statusFull: ERROR_RED,
    statusLimited: WARNING_YELLOW,
    cardBackground: BG_LIGHT,
    border: BORDER_COLOR,
  },
  dark: {
    text: WHITE,
    background: '#151718',
    tint: tintColorDark,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
    statusAvailable: SUCCESS_GREEN,
    statusFull: ERROR_RED,
    statusLimited: WARNING_YELLOW,
    cardBackground: '#1E1E1E',
    border: '#2D2D2D',
  },
};
