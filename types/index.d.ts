type Options = {
  useClass?: boolean;
  useConstant?: boolean;
  useId?: boolean;
  useQuery?: boolean;
  useVariable?: boolean;
  minify?: boolean;
};

type SwordCSS = {
  compile(stylesheet: string): string;
};

declare function Sword(opts?: Options): SwordCSS;

export = Sword;
