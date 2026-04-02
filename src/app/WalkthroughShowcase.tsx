import { LanguageProvider } from './contexts/language';
import { FarmerWalkthroughDemo } from './screens/farmer/FarmerWalkthroughDemo';

export function WalkthroughShowcase() {
  return (
    <LanguageProvider>
      <FarmerWalkthroughDemo />
    </LanguageProvider>
  );
}
