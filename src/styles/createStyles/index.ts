import { TStyleRules } from '../../types';

function createStyles<ClassKey extends string, Props extends {}>(
  styles: TStyleRules<Props, ClassKey>
): TStyleRules<Props, ClassKey> {
  return styles;
}

export { createStyles };
