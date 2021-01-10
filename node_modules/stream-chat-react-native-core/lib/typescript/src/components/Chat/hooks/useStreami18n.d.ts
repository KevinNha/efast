import type { TranslationContextValue } from '../../../contexts/translationContext/TranslationContext';
import { Streami18n } from '../../../utils/Streami18n';
export declare const useStreami18n: ({ i18nInstance, setTranslators, }: {
    setTranslators: React.Dispatch<React.SetStateAction<TranslationContextValue>>;
    i18nInstance?: Streami18n | undefined;
}) => void;
