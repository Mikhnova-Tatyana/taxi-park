import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { TRootState } from '../redux/reducers/rootReducer';

export const useTypedSelector: TypedUseSelectorHook<TRootState> = useSelector;
