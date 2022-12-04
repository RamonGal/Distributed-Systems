// define syntax used in proto file

// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.27.1
// 	protoc        (unknown)
// source: gateway/gateway.proto

package grpc_gateway_demo

import (
	_ "google.golang.org/genproto/googleapis/api/annotations"
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

// simple message
type StyleRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	PhotoIn []int32 `protobuf:"varint,1,rep,packed,name=photoIn,proto3" json:"photoIn,omitempty"`
}

func (x *StyleRequest) Reset() {
	*x = StyleRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_gateway_gateway_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *StyleRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*StyleRequest) ProtoMessage() {}

func (x *StyleRequest) ProtoReflect() protoreflect.Message {
	mi := &file_gateway_gateway_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use StyleRequest.ProtoReflect.Descriptor instead.
func (*StyleRequest) Descriptor() ([]byte, []int) {
	return file_gateway_gateway_proto_rawDescGZIP(), []int{0}
}

func (x *StyleRequest) GetPhotoIn() []int32 {
	if x != nil {
		return x.PhotoIn
	}
	return nil
}

type StyleReply struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	PhotoOut []int32 `protobuf:"varint,1,rep,packed,name=photoOut,proto3" json:"photoOut,omitempty"`
}

func (x *StyleReply) Reset() {
	*x = StyleReply{}
	if protoimpl.UnsafeEnabled {
		mi := &file_gateway_gateway_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *StyleReply) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*StyleReply) ProtoMessage() {}

func (x *StyleReply) ProtoReflect() protoreflect.Message {
	mi := &file_gateway_gateway_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use StyleReply.ProtoReflect.Descriptor instead.
func (*StyleReply) Descriptor() ([]byte, []int) {
	return file_gateway_gateway_proto_rawDescGZIP(), []int{1}
}

func (x *StyleReply) GetPhotoOut() []int32 {
	if x != nil {
		return x.PhotoOut
	}
	return nil
}

var File_gateway_gateway_proto protoreflect.FileDescriptor

var file_gateway_gateway_proto_rawDesc = []byte{
	0x0a, 0x15, 0x67, 0x61, 0x74, 0x65, 0x77, 0x61, 0x79, 0x2f, 0x67, 0x61, 0x74, 0x65, 0x77, 0x61,
	0x79, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x07, 0x67, 0x61, 0x74, 0x65, 0x77, 0x61, 0x79,
	0x1a, 0x1c, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2f, 0x61, 0x70, 0x69, 0x2f, 0x61, 0x6e, 0x6e,
	0x6f, 0x74, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x73, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22, 0x28,
	0x0a, 0x0c, 0x53, 0x74, 0x79, 0x6c, 0x65, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x18,
	0x0a, 0x07, 0x70, 0x68, 0x6f, 0x74, 0x6f, 0x49, 0x6e, 0x18, 0x01, 0x20, 0x03, 0x28, 0x05, 0x52,
	0x07, 0x70, 0x68, 0x6f, 0x74, 0x6f, 0x49, 0x6e, 0x22, 0x28, 0x0a, 0x0a, 0x53, 0x74, 0x79, 0x6c,
	0x65, 0x52, 0x65, 0x70, 0x6c, 0x79, 0x12, 0x1a, 0x0a, 0x08, 0x70, 0x68, 0x6f, 0x74, 0x6f, 0x4f,
	0x75, 0x74, 0x18, 0x01, 0x20, 0x03, 0x28, 0x05, 0x52, 0x08, 0x70, 0x68, 0x6f, 0x74, 0x6f, 0x4f,
	0x75, 0x74, 0x32, 0x62, 0x0a, 0x07, 0x47, 0x72, 0x65, 0x65, 0x74, 0x65, 0x72, 0x12, 0x57, 0x0a,
	0x09, 0x43, 0x61, 0x6c, 0x6c, 0x53, 0x74, 0x79, 0x6c, 0x65, 0x12, 0x15, 0x2e, 0x67, 0x61, 0x74,
	0x65, 0x77, 0x61, 0x79, 0x2e, 0x53, 0x74, 0x79, 0x6c, 0x65, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73,
	0x74, 0x1a, 0x13, 0x2e, 0x67, 0x61, 0x74, 0x65, 0x77, 0x61, 0x79, 0x2e, 0x53, 0x74, 0x79, 0x6c,
	0x65, 0x52, 0x65, 0x70, 0x6c, 0x79, 0x22, 0x1e, 0x82, 0xd3, 0xe4, 0x93, 0x02, 0x18, 0x3a, 0x01,
	0x2a, 0x22, 0x13, 0x2f, 0x72, 0x70, 0x63, 0x2f, 0x73, 0x74, 0x79, 0x6c, 0x65, 0x2d, 0x74, 0x72,
	0x61, 0x6e, 0x73, 0x66, 0x65, 0x72, 0x42, 0x3d, 0x5a, 0x3b, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62,
	0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x61, 0x6e, 0x73, 0x68, 0x75, 0x6c, 0x72, 0x67, 0x6f, 0x79, 0x61,
	0x6c, 0x2f, 0x67, 0x72, 0x70, 0x63, 0x2d, 0x67, 0x61, 0x74, 0x65, 0x77, 0x61, 0x79, 0x2d, 0x64,
	0x65, 0x6d, 0x6f, 0x3b, 0x67, 0x72, 0x70, 0x63, 0x5f, 0x67, 0x61, 0x74, 0x65, 0x77, 0x61, 0x79,
	0x5f, 0x64, 0x65, 0x6d, 0x6f, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_gateway_gateway_proto_rawDescOnce sync.Once
	file_gateway_gateway_proto_rawDescData = file_gateway_gateway_proto_rawDesc
)

func file_gateway_gateway_proto_rawDescGZIP() []byte {
	file_gateway_gateway_proto_rawDescOnce.Do(func() {
		file_gateway_gateway_proto_rawDescData = protoimpl.X.CompressGZIP(file_gateway_gateway_proto_rawDescData)
	})
	return file_gateway_gateway_proto_rawDescData
}

var file_gateway_gateway_proto_msgTypes = make([]protoimpl.MessageInfo, 2)
var file_gateway_gateway_proto_goTypes = []interface{}{
	(*StyleRequest)(nil), // 0: gateway.StyleRequest
	(*StyleReply)(nil),   // 1: gateway.StyleReply
}
var file_gateway_gateway_proto_depIdxs = []int32{
	0, // 0: gateway.Greeter.CallStyle:input_type -> gateway.StyleRequest
	1, // 1: gateway.Greeter.CallStyle:output_type -> gateway.StyleReply
	1, // [1:2] is the sub-list for method output_type
	0, // [0:1] is the sub-list for method input_type
	0, // [0:0] is the sub-list for extension type_name
	0, // [0:0] is the sub-list for extension extendee
	0, // [0:0] is the sub-list for field type_name
}

func init() { file_gateway_gateway_proto_init() }
func file_gateway_gateway_proto_init() {
	if File_gateway_gateway_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_gateway_gateway_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*StyleRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_gateway_gateway_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*StyleReply); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_gateway_gateway_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   2,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_gateway_gateway_proto_goTypes,
		DependencyIndexes: file_gateway_gateway_proto_depIdxs,
		MessageInfos:      file_gateway_gateway_proto_msgTypes,
	}.Build()
	File_gateway_gateway_proto = out.File
	file_gateway_gateway_proto_rawDesc = nil
	file_gateway_gateway_proto_goTypes = nil
	file_gateway_gateway_proto_depIdxs = nil
}
