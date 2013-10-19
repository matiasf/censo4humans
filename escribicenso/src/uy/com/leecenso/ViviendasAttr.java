package uy.com.leecenso;

import nl.knaw.dans.common.dbflib.Type;

public enum ViviendasAttr {
	
	ID_VIVIEND(Type.CHARACTER),
	DPTO(Type.CHARACTER),
	LOC(Type.CHARACTER),
	SECC(Type.CHARACTER),
	SEGM(Type.CHARACTER),
	VIVID(Type.NUMBER),
	VIVVO01(Type.NUMBER),
	VIVVO03(Type.NUMBER),
	VIVVO04(Type.NUMBER),
	VIVDV01(Type.NUMBER),
	VIVDV02(Type.NUMBER),
	VIVDV03(Type.NUMBER),
	VIVDV05(Type.NUMBER),
	VIVDV06(Type.NUMBER),
	VIVDV07(Type.NUMBER),
	VIVHV01(Type.NUMBER),
	VIVHV01_1(Type.NUMBER),
	CATEVIV(Type.NUMBER),
	TIPO_VIVIE(Type.NUMBER),
	CCZ(Type.NUMBER),
	BARRIO85(Type.CHARACTER),
	SP_2010(Type.NUMBER),
	PLANILLA(Type.NUMBER),
	V24(Type.NUMBER);
	
	private final Type type;
	
	private ViviendasAttr(final Type type) {
		this.type = type;
	}
	
	public Type type() {
		return type;
	}

}
