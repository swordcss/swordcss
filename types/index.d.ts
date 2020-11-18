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
  setOpts(opts: Options): SwordCSS;
};

declare function Sword(opts?: Options): SwordCSS;

export = Sword;
