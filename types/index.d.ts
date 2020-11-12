type Options = {
  useClass?: boolean;
  useConstant?: boolean;
  useId?: boolean;
  useQuery?: boolean;
  useVariable?: boolean;
  minify?: boolean;
};

declare class SwordCSS {
  constructor(opts: Options);

  compile(stylesheet: string): string;
}

declare function Sword(opts?: Options): SwordCSS;

export = Sword;
