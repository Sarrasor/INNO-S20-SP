// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: helloworld.proto

package io.grpc.examples.helloworld;

public interface ImageReplyOrBuilder extends
    // @@protoc_insertion_point(interface_extends:helloworld.ImageReply)
    com.google.protobuf.MessageOrBuilder {

  /**
   * <code>int32 status = 1;</code>
   * @return The status.
   */
  int getStatus();

  /**
   * <code>bytes data = 2;</code>
   * @return The data.
   */
  com.google.protobuf.ByteString getData();

  /**
   * <code>int64 offset = 3;</code>
   * @return The offset.
   */
  long getOffset();
}