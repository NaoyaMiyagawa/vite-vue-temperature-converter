import { computed, ref } from 'vue';

export const useTemperature = () => {
  const scale = ref('c');
  const temperature = ref(0);

  const toCelsius = (fahrenheit: number): number => ((fahrenheit - 32) * 5) / 9;
  const toFahrenheit = (celsius: number): number => (celsius * 9) / 5 + 32;
  const tryConvert = (temperature: number, convert: (temp: number) => number) => {
    const input = parseFloat(String(temperature));
    if (Number.isNaN(input)) {
      return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
  };

  const celsius = computed(() => {
    return scale.value === 'f' ? tryConvert(temperature.value, toCelsius) : temperature.value;
  });
  const fahrenheit = computed(() => {
    return scale.value === 'c' ? tryConvert(temperature.value, toFahrenheit) : temperature.value;
  });

  function handleCelsiusChange(newTemperature: number): void {
    scale.value = 'c';
    temperature.value = newTemperature;
  }
  function handleFahrenheitChange(newTemperature: number): void {
    scale.value = 'f';
    temperature.value = newTemperature;
  }

  return { scale, temperature, celsius, fahrenheit, handleCelsiusChange, handleFahrenheitChange };
};
